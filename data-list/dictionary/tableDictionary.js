import * as Yup from "yup";
// import { checkEmailExist } from "@/data-list/core/request";

import {
  stockColumns,
  seriesColumns,
  colorSchemeColumns,
  designColumns,
  materialColumns,
  supplierColumns,
  accountsColumns,
  roleColumns,
  environmentColumns,
  colorColumns,
} from "../table/columns/_columns";

const enable_label = "啟用狀態";
const comment_label = "備註";

export const fullData = {
  // -&anchor
  stock: {
    pageTitle: "商品維護",
    searchPlaceholder: "商品",
    createHeaderText: "商品資料",
    column: stockColumns,
    modalConfig: {
      avatar: false,
      name_label: "商品樣式",
      name_placeholder: "請輸入商品樣式",
      name_required: true,
      code_label: "商品型號",
      code_required: true,
      code_placeholder: "請輸入商品型號",
      supplier_label: "商品目錄",
      enable_label: "上架狀態",
      series_label: "商品系列",
      color_label: "商品顏色",
      color_placeholder: "輸入商品顏色名稱",
      material_label: "面料材質",
      design_label: "商品風格",
      absorption_label: "吸音效果",
      block_label: "遮光效果",
      description_label: "商品描述",
    },
    fetchUrl: "stock",
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
      series: Yup.string().required(),
      code: Yup.string().max(15, "至多 15 個字").required("此欄位必填"),
    }),
    formField: {
      name: "",
      code: "",
      enable: true,
      series: "",
      supplier: "",
      material: [],
      design: [],
      absorption: 1,
      block: 1,
      description: "",
      environment: [],
      colorImages: [],
    },
  },
  // -&anchor
  series: {
    pageTitle: "商品系列",
    searchPlaceholder: "系列",
    createHeaderText: "商品系列",
    column: seriesColumns,
    modalConfig: {
      enable_label,
      name_label: "系列名稱",
      name_required: true,
      code_required: true,
      code_label: "系列編號",
      comment_label,
    },
    fetchUrl: "series",
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
      code: Yup.string().max(15, "至多 15 個字").required("此欄位必填"),
    }),
    formField: {
      name: "",
      code: "",
      enable: true,
      comment: "",
    },
  },
  // -&anchor
  color: {
    pageTitle: "顏色",
    searchPlaceholder: "顏色",
    createHeaderText: "顏色",
    column: colorColumns,
    modalConfig: {
      enable_label,
      name_label: "顏色名稱",
      comment_label,
    },
    fetchUrl: "color-name",
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
    }),
    formField: {
      name: "",
      enable: true,
    },
  },
  // -&anchor
  colorScheme: {
    pageTitle: "色系類別",
    searchPlaceholder: "色系",
    createHeaderText: "色系類別",
    column: colorSchemeColumns,
    modalConfig: {
      enable_label,
      name_label: "色系名稱",
      comment_label,
    },
    fetchUrl: "color-scheme",
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
    }),
    formField: {
      name: "",
      enable: true,
      comment: "",
    },
  },
  // -&anchor
  design: {
    pageTitle: "風格類別",
    searchPlaceholder: "風格",
    createHeaderText: "風格類別",
    column: designColumns,
    modalConfig: {
      enable_label,
      name_label: "風格名稱",
      comment_label,
    },
    fetchUrl: "design",
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
    }),
    formField: {
      name: "",
      enable: true,
      comment: "",
    },
  },
  // -&anchor
  material: {
    pageTitle: "面料材質",
    searchPlaceholder: "材質",
    createHeaderText: "面料材質",
    column: materialColumns,
    modalConfig: {
      enable_label,
      name_label: "面料名稱",
      comment_label,
    },
    fetchUrl: "material",
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
    }),
    formField: {
      name: "",
      enable: true,
      comment: "",
    },
  },
  // -&anchor
  supplier: {
    pageTitle: "商品目錄",
    searchPlaceholder: "商品目錄",
    createHeaderText: "商品目錄",
    column: supplierColumns,
    modalConfig: {
      enable_label,
      name_label: "目錄名稱",
      code_label: "目錄編號",
      comment_label,
    },
    fetchUrl: "supplier",
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
      code: Yup.string().max(15, "至多 15 個字").required("此欄位必填"),
    }),
    formField: {
      name: "",
      code: "",
      enable: true,
      comment: "",
    },
  },
  // -&anchor
  account: {
    pageTitle: "員工資料",
    searchPlaceholder: "員工",
    createHeaderText: "員工資料",
    column: accountsColumns,
    fetchUrl: "employee",
    modalConfig: {
      name_label: "姓名",
      name_required: true,
      email: true,
      email_required: true,
      enable_label,
      code_label: "員工編號",
      role_label: "員工角色",
      code_read_only: true,
      id_code_label: "身分證號",
      id_code_placeholder: "輸入身分證號",
      id_code_required: true,
      phone_number_label: "手機號碼",
      phone_number_placeholder: "輸入手機號碼",
      phone_number_required: true,
      password_required: true,
      password_label: "登入密碼",
      password_placeholder: "輸入密碼",
    },
    validationSchema: Yup.object().shape({
      preserve: Yup.boolean(),
      oldEmail: Yup.string(),
      email: Yup.string()
        .email("格式錯誤")
        .required("此欄位必填")
        .test("email-check", "此帳號已被使用", async function (email) {
          if (email === this.parent.oldEmail) return true;
          try {
            const formData = new FormData();
            formData.append("email", email);
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_BACKENDURL}/check-email`,
              {
                method: "POST",
                body: formData,
              }
            );
            const result = await res.json();
            const { exist } = result.data;
            return !exist;
          } catch (error) {
            console.log(error);
            return false;
          }
        }),
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(50, "至多 50 個字")
        .required("此欄位必填"),
      id_code: Yup.string()
        .matches(/^[A-Za-z]\d{9}$/, "僅限輸入 10 碼英數字")
        .required("此欄位必填"),
      phone_number: Yup.string()
        .matches(/^\d{10}$/, "僅限輸入 10 碼數字")
        .required("此欄位必填"),
      password: Yup.string().when("preserve", {
        is: false,
        then: () =>
          Yup.string()
            .matches(
              /^(?=.*[a-zA-Z0-9].*[a-zA-Z0-9].*[a-zA-Z0-9].*[a-zA-Z0-9]).+$/,
              "至少 4 碼英數字"
            )
            .required("此欄位必填"),
        otherwise: () => Yup.string(),
      }),
    }),
    formField: {
      name: "",
      enable: true,
      id_code: "",
      email: "",
      phone_number: "",
      code: "",
      password: "",
    },
  },
  // -&anchor
  role: {
    pageTitle: "角色類別",
    searchPlaceholder: "角色類別",
    createHeaderText: "角色類別",
    column: roleColumns,
    fetchUrl: "role",
    modalConfig: {
      name_label: "角色名稱",
      name_required: true,
      // members_label: "員工列表",
      permission_label: "權限設定",
      permission_list: {},
      comment_label,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(50, "至多 50 個字")
        .required("此欄位必填"),
    }),
    formField: {
      name: "",
      comment: "",
    },
  },
  // -&anchor
  environment: {
    pageTitle: "場景管理",
    searchPlaceholder: "場景",
    createHeaderText: "場景",
    column: environmentColumns,
    modalConfig: {
      enable_label,
      name_label: "場景名稱",
      comment_label,
    },
    fetchUrl: "environment",
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "至少 2 個字")
        .max(15, "至多 15 個字")
        .required("此欄位必填"),
    }),
    formField: {
      name: "",
      enable: true,
      comment: "",
    },
  },
  // -&anchor
  permission: {
    fetchUrl: "permission",
  },
};

const ArrangeWithProperty = Object.entries(fullData).reduce(
  (tableDict, [table, content]) => {
    Object.entries(content).reduce((dict, [key, value]) => {
      dict[key] === undefined && (dict[key] = {});
      dict[key][table] = value;
      return dict;
    }, tableDict);
    return tableDict;
  },
  {}
);

export default ArrangeWithProperty;
