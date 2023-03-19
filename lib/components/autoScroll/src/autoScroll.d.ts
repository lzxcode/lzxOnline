declare const autoScroll: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    mode: string;
    height: number;
}>;
export default autoScroll;
