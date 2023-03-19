import path from "path";
import fs from "fs";
import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";
import type Token from "markdown-it/lib/token";
import type Renderer from "markdown-it/lib/renderer";
import { docRoot } from "../utils/paths";
import { highlight } from "../utils/highlight";
import tag from "../utils/tag";
import externalLinkIcon from "../utils/external-link-icon";
import tableWrapper from "../utils/table-wrapper";
import tooltip from "../utils/tooltip";
import { ApiTableContainer } from "../utils/api-table";

const localMd = MarkdownIt().use(tag);
interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string;
}
export const mdPlugin = (md: MarkdownIt) => {
  md.use(externalLinkIcon);
  md.use(tableWrapper);
  md.use(tooltip);
  md.use(tag);
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        let source = "";
        const sourceFile = sourceFileToken.children?.[0].content ?? "";
        let file = "";
        if (sourceFileToken.type === "inline") {
          file = fs.readFileSync(
            path.resolve(docRoot, "examples/components", `${sourceFile}.vue`),
            "utf-8"
          );
        }
        source = `../../examples/components/${sourceFile}.vue`;

        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);
        return `<demo codePath=${source} htmlStr=${encodeURIComponent(
          highlight(file, "vue")
        )} codeStr=${encodeURIComponent(file)}>`;
      } else {
        return "</demo>";
      }
    },
  } as ContainerOpts);

  md.use(ApiTableContainer);
};
