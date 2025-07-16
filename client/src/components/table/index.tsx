import type { FC, ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

interface TableCellProps {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
}

const Table: FC<TableProps> = ({ children, className }) => {
  return <table className={`min-w-full ${className}`}>{children}</table>;
};
const TableHeader: FC<TableHeaderProps> = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};
const TableBody: FC<TableBodyProps> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};
const TableRow: FC<TableRowProps> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};
const TableCell: FC<TableCellProps> = ({ children, isHeader, className }) => {
  const CellTag = isHeader ? "th" : "td";
  return <CellTag className={className}>{children}</CellTag>;
};

export { Table, TableHeader, TableBody, TableRow, TableCell };
