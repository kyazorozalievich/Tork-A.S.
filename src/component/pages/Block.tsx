"use client";
import scss from "./Block.module.scss";

interface IData {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface IEl {
  el: IData;
}

const Block = ({ el }: IEl) => {
  return (
    <div className={scss.Block}>
      <a>{el.icon}</a>
      <h3>{el.title}</h3>
      <p>{el.description}</p>
    </div>
  );
};

export default Block;
