import { PageData } from "./EditorTypes.ts";

// Required<T> 用于将类型 T 的所有属性标记为必需（非可选）
// Partial<T> 用于将类型 T 的所有属性变为可选属性
// Omit<T,K> 从类型 T 中排除指定的键 K。它会创建一个新的类型，该类型包含 T 中除了 K 之外的所有属性。
export type TemplateProps = Required<Omit<PageData, "props" | "setting">>;

export interface TemplatesProps {
	data: TemplateProps[];
	totalTemplates: number;
	works: TemplateProps[];
	totalWorks: number;
}
