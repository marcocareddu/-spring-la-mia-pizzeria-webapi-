import PizzaForm from './PizzaForm.vue';
import { showForm, singlePizza, pizzas, props, form } from './PizzaIndex.vue';

const showPizzaForm = () => {
// Imposta showForm a true per mostrare il PizzaForm
showForm.value = true;

singlePizza.value =


    ;


const __VLS_componentsOption = {};

let __VLS_name!: 'PizzaIndex';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'PizzaForm', typeof __VLS_localComponents, "PizzaForm", "PizzaForm", "PizzaForm">;
__VLS_intrinsicElements.header; __VLS_intrinsicElements.header;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i; __VLS_intrinsicElements.i;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.input;
__VLS_components.PizzaForm;
// @ts-ignore
[PizzaForm,];
{
const __VLS_0 = __VLS_intrinsicElements["header"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("position-fixed shadow d-flex align-items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("position-fixed shadow d-flex align-items-center"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("container justify-content-between d-flex align-items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("container justify-content-between d-flex align-items-center"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["a"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["h1"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["i"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("fa-solid fa-pizza-slice text-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("fa-solid fa-pizza-slice text-danger"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("d-flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["button"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{ onClick: {} as any, }, class: ("btn btn-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("btn btn-danger"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_32>).onClick) };
__VLS_35 = { click: (__VLS_ctx.showPizzaForm) };
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_36 = __VLS_intrinsicElements["div"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: ("container"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
{
const __VLS_41 = __VLS_intrinsicElements["div"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: ("title d-flex justify-content-center my-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("title d-flex justify-content-center my-5"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
const __VLS_46 = __VLS_intrinsicElements["h1"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
{
const __VLS_51 = __VLS_intrinsicElements["i"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, class: ("fa-solid fa-pizza-slice text-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("fa-solid fa-pizza-slice text-danger"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
}
(__VLS_49.slots!).default;
}
(__VLS_44.slots!).default;
}
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("d-flex justify-content-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex justify-content-center"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
{
const __VLS_61 = __VLS_intrinsicElements["form"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
{
const __VLS_66 = __VLS_intrinsicElements["div"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{}, class: ("input-group my-3 search-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, class: ("input-group my-3 search-container"), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
{
const __VLS_71 = __VLS_intrinsicElements["input"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{}, type: ("text"), name: ("searched"), class: ("form-control"), placeholder: ("Ricerca una pizza"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, type: ("text"), name: ("searched"), class: ("form-control"), placeholder: ("Ricerca una pizza"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
}
(__VLS_69.slots!).default;
}
(__VLS_64.slots!).default;
}
(__VLS_59.slots!).default;
}
if (!__VLS_ctx.pizzas || __VLS_ctx.pizzas.length === 0) {
{
const __VLS_76 = __VLS_intrinsicElements["div"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{}, class: ("title d-flex justify-content-center mt-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, class: ("title d-flex justify-content-center mt-5"), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
{
const __VLS_81 = __VLS_intrinsicElements["h1"];
const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
(__VLS_84.slots!).default;
}
(__VLS_79.slots!).default;
}
// @ts-ignore
[showPizzaForm, pizzas, pizzas,];
}
{
const __VLS_86 = __VLS_intrinsicElements["div"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{}, class: ("card-container d-flex row row-cols-4 justify-content-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, class: ("card-container d-flex row row-cols-4 justify-content-center"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
{
const __VLS_91 = ({} as 'PizzaForm' extends keyof typeof __VLS_ctx ? { 'PizzaForm': typeof __VLS_ctx.PizzaForm; } : typeof __VLS_resolvedLocalAndGlobalComponents).PizzaForm;
const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{}, pizzaProp: ((__VLS_ctx.singlePizza)), }));
({} as { PizzaForm: typeof __VLS_91; }).PizzaForm;
const __VLS_93 = __VLS_92({ ...{}, pizzaProp: ((__VLS_ctx.singlePizza)), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{}, pizzaProp: ((__VLS_ctx.singlePizza)), });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
}
(__VLS_89.slots!).default;
}
(__VLS_39.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[singlePizza, singlePizza, singlePizza,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
$props: __VLS_makeOptional(props),
...props,
PizzaForm: PizzaForm as typeof PizzaForm,
pizzas: pizzas as typeof pizzas,
singlePizza: singlePizza as typeof singlePizza,
form: form as typeof form,
showPizzaForm: showPizzaForm as typeof showPizzaForm,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {
$props: __VLS_makeOptional(props),
...props,
};
},
});
};
