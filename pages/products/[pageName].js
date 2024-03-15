import dynamic from "next/dynamic";
import currentTable from "@/data-list/globalVariable/currentTable";

const DynamicList = dynamic(
  async () => {
    const List = await import("@/data-list/List");
    return List;
  },
  {
    ssr: false,
  }
);

const ProductsPage = ({ tableName }) => {
  currentTable.set(tableName);

  return <DynamicList />;
};

export const getStaticPaths = async () => {
  const pageNameDict = [
    "management",
    "series",
    "colors",
    "design",
    "material",
    "vendor",
  ];

  const paths = pageNameDict.map((pageName) => ({ params: { pageName } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { pageName } }) => {
  const tableNameDict = {
    management: "products",
    series: "series",
    colors: "colorScheme",
    design: "design",
    material: "material",
    vendor: "vendor",
  };
  return {
    props: {
      tableName: tableNameDict[pageName],
    },
  };
};

export default ProductsPage;
