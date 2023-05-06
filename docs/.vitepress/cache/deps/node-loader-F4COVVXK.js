import {
  cyan,
  init_module,
  loadIcon,
  require_browser,
  require_execa,
  require_find_up,
  require_fs,
  require_path,
  require_process,
  require_url,
  searchForIcon,
  yellow
} from "./chunk-EZRO5OEM.js";
import {
  __commonJS,
  __privateAdd,
  __privateGet,
  __privateSet,
  __privateWrapper,
  __publicField,
  __toESM
} from "./chunk-JMUPIC2K.js";

// browser-external:module
var require_module = __commonJS({
  "browser-external:module"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "module" has been externalized for browser compatibility. Cannot access "module.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@iconify/utils/lib/loader/fs.mjs
var import_fs5 = __toESM(require_fs(), 1);

// node_modules/local-pkg/index.mjs
var import_path3 = __toESM(require_path(), 1);
var import_fs3 = __toESM(require_fs(), 1);
var import_module = __toESM(require_module(), 1);

// node_modules/local-pkg/dist/shared.mjs
var import_fs = __toESM(require_fs(), 1);
var import_path = __toESM(require_path(), 1);
var import_url = __toESM(require_url(), 1);
var import_process = __toESM(require_process(), 1);
var import_path2 = __toESM(require_path(), 1);
var import_fs2 = __toESM(require_fs(), 1);
var import_url2 = __toESM(require_url(), 1);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper2 = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet2(obj, member, value, setter);
  },
  get _() {
    return __privateGet2(obj, member, getter);
  }
});
var Node = class {
  constructor(value) {
    __publicField2(this, "value");
    __publicField2(this, "next");
    this.value = value;
  }
};
var _head;
var _tail;
var _size;
var Queue = class {
  constructor() {
    __privateAdd2(this, _head, void 0);
    __privateAdd2(this, _tail, void 0);
    __privateAdd2(this, _size, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (__privateGet2(this, _head)) {
      __privateGet2(this, _tail).next = node;
      __privateSet2(this, _tail, node);
    } else {
      __privateSet2(this, _head, node);
      __privateSet2(this, _tail, node);
    }
    __privateWrapper2(this, _size)._++;
  }
  dequeue() {
    const current = __privateGet2(this, _head);
    if (!current) {
      return;
    }
    __privateSet2(this, _head, __privateGet2(this, _head).next);
    __privateWrapper2(this, _size)._--;
    return current.value;
  }
  clear() {
    __privateSet2(this, _head, void 0);
    __privateSet2(this, _tail, void 0);
    __privateSet2(this, _size, 0);
  }
  get size() {
    return __privateGet2(this, _size);
  }
  *[Symbol.iterator]() {
    let current = __privateGet2(this, _head);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
_head = /* @__PURE__ */ new WeakMap();
_tail = /* @__PURE__ */ new WeakMap();
_size = /* @__PURE__ */ new WeakMap();
var findUpStop = Symbol("findUpStop");

// node_modules/local-pkg/index.mjs
var _require = (0, import_module.createRequire)(import.meta.url);
function resolveModule(name, options) {
  try {
    return _require.resolve(name, options);
  } catch (e) {
    return void 0;
  }
}
function isPackageExists(name, options) {
  return !!resolvePackage(name, options);
}
function resolvePackage(name, options = {}) {
  try {
    return _require.resolve(`${name}/package.json`, options);
  } catch {
  }
  try {
    return _require.resolve(name, options);
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND")
      console.error(e);
    return false;
  }
}

// node_modules/@antfu/install-pkg/dist/index.mjs
var import_fs4 = __toESM(require_fs(), 1);
var import_path4 = __toESM(require_path(), 1);
var import_find_up = __toESM(require_find_up(), 1);
var import_execa = __toESM(require_execa(), 1);
var AGENTS = ["pnpm", "yarn", "npm", "pnpm@6", "yarn@berry", "bun"];
var LOCKS = {
  "bun.lockb": "bun",
  "pnpm-lock.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
  "npm-shrinkwrap.json": "npm"
};
async function detectPackageManager(cwd = process.cwd()) {
  let agent = null;
  const lockPath = await (0, import_find_up.default)(Object.keys(LOCKS), { cwd });
  let packageJsonPath;
  if (lockPath)
    packageJsonPath = import_path4.default.resolve(lockPath, "../package.json");
  else
    packageJsonPath = await (0, import_find_up.default)("package.json", { cwd });
  if (packageJsonPath && import_fs4.default.existsSync(packageJsonPath)) {
    try {
      const pkg = JSON.parse(import_fs4.default.readFileSync(packageJsonPath, "utf8"));
      if (typeof pkg.packageManager === "string") {
        const [name, version] = pkg.packageManager.split("@");
        if (name === "yarn" && parseInt(version) > 1)
          agent = "yarn@berry";
        else if (name === "pnpm" && parseInt(version) < 7)
          agent = "pnpm@6";
        else if (name in AGENTS)
          agent = name;
        else
          console.warn("[ni] Unknown packageManager:", pkg.packageManager);
      }
    } catch {
    }
  }
  if (!agent && lockPath)
    agent = LOCKS[import_path4.default.basename(lockPath)];
  return agent;
}
async function installPackage(names, options = {}) {
  const detectedAgent = options.packageManager || await detectPackageManager(options.cwd) || "npm";
  const [agent] = detectedAgent.split("@");
  if (!Array.isArray(names))
    names = [names];
  const args = options.additionalArgs || [];
  if (options.preferOffline) {
    if (detectedAgent === "yarn@berry")
      args.unshift("--cached");
    else
      args.unshift("--prefer-offline");
  }
  return (0, import_execa.default)(
    agent,
    [
      agent === "yarn" ? "add" : "install",
      options.dev ? "-D" : "",
      ...args,
      ...names
    ].filter(Boolean),
    {
      stdio: options.silent ? "ignore" : "inherit",
      cwd: options.cwd
    }
  );
}

// node_modules/@antfu/utils/dist/index.mjs
function sleep(ms, callback) {
  return new Promise((resolve) => setTimeout(async () => {
    await (callback == null ? void 0 : callback());
    resolve();
  }, ms));
}
var Node2 = class {
  constructor(value) {
    __publicField(this, "value");
    __publicField(this, "next");
    this.value = value;
  }
};
var _head2, _tail2, _size2;
var Queue2 = class {
  constructor() {
    __privateAdd(this, _head2, void 0);
    __privateAdd(this, _tail2, void 0);
    __privateAdd(this, _size2, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node2(value);
    if (__privateGet(this, _head2)) {
      __privateGet(this, _tail2).next = node;
      __privateSet(this, _tail2, node);
    } else {
      __privateSet(this, _head2, node);
      __privateSet(this, _tail2, node);
    }
    __privateWrapper(this, _size2)._++;
  }
  dequeue() {
    const current = __privateGet(this, _head2);
    if (!current) {
      return;
    }
    __privateSet(this, _head2, __privateGet(this, _head2).next);
    __privateWrapper(this, _size2)._--;
    return current.value;
  }
  clear() {
    __privateSet(this, _head2, void 0);
    __privateSet(this, _tail2, void 0);
    __privateSet(this, _size2, 0);
  }
  get size() {
    return __privateGet(this, _size2);
  }
  *[Symbol.iterator]() {
    let current = __privateGet(this, _head2);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
_head2 = new WeakMap();
_tail2 = new WeakMap();
_size2 = new WeakMap();
var VOID = Symbol("p-void");

// node_modules/@iconify/utils/lib/loader/install-pkg.mjs
init_module();

// node_modules/@iconify/utils/lib/loader/warn.mjs
init_module();
var warned = /* @__PURE__ */ new Set();
function warnOnce(msg) {
  if (!warned.has(msg)) {
    warned.add(msg);
    console.warn(yellow(`[@iconify-loader] ${msg}`));
  }
}

// node_modules/@iconify/utils/lib/loader/install-pkg.mjs
var pending;
var tasks = {};
async function tryInstallPkg(name) {
  if (pending) {
    await pending;
  }
  if (!tasks[name]) {
    console.log(cyan(`Installing ${name}...`));
    tasks[name] = pending = installPackage(name, {
      dev: true,
      preferOffline: true
    }).then(() => sleep(300)).catch((e) => {
      warnOnce(`Failed to install ${name}`);
      console.error(e);
    }).finally(() => {
      pending = void 0;
    });
  }
  return tasks[name];
}

// node_modules/@iconify/utils/lib/loader/fs.mjs
init_module();
var _collections = {};
var isLegacyExists = isPackageExists("@iconify/json");
async function loadCollectionFromFS(name, autoInstall = false) {
  if (!await _collections[name]) {
    _collections[name] = task();
  }
  return _collections[name];
  async function task() {
    let jsonPath = resolveModule(`@iconify-json/${name}/icons.json`);
    if (!jsonPath && isLegacyExists) {
      jsonPath = resolveModule(`@iconify/json/json/${name}.json`);
    }
    if (!jsonPath && !isLegacyExists && autoInstall) {
      await tryInstallPkg(`@iconify-json/${name}`);
      jsonPath = resolveModule(`@iconify-json/${name}/icons.json`);
    }
    let stat;
    try {
      stat = jsonPath ? await import_fs5.promises.lstat(jsonPath) : void 0;
    } catch (err) {
      return void 0;
    }
    if (stat && stat.isFile()) {
      return JSON.parse(await import_fs5.promises.readFile(jsonPath, "utf8"));
    } else {
      return void 0;
    }
  }
}

// node_modules/@iconify/utils/lib/loader/node-loader.mjs
var import_debug = __toESM(require_browser(), 1);
var import_fs7 = __toESM(require_fs(), 1);
init_module();
var loadNodeIcon = async (collection, icon, options) => {
  let result = await loadIcon(collection, icon, options);
  if (result) {
    return result;
  }
  const iconSet = await loadCollectionFromFS(collection, options == null ? void 0 : options.autoInstall);
  if (iconSet) {
    const ids = [
      icon,
      icon.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      icon.replace(/([a-z])(\d+)/g, "$1-$2")
    ];
    result = await searchForIcon(iconSet, collection, ids, options);
  }
  if (!result && (options == null ? void 0 : options.warn)) {
    warnOnce(`failed to load ${options.warn} icon`);
  }
  return result;
};
export {
  loadNodeIcon
};
//# sourceMappingURL=node-loader-F4COVVXK.js.map
