import { ReactNode } from "react";

interface iTextProps {
  children: ReactNode;
  className?: string;
  tag: string;
}

export function Text({ children, className, tag }: iTextProps) {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "h5" && <h5 className={className}>{children}</h5>}
      {tag === "h6" && <h6 className={className}>{children}</h6>}
      {tag === "p" && <p className={className}>{children}</p>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "label" && <label className={className}>{children}</label>}
      {tag === "th" && <th className={className}>{children}</th>}
      {tag === "td" && <td className={className}>{children}</td>}
    </>
  );
}