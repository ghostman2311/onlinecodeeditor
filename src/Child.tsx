import React, { PropsWithChildren, useState } from "react";

interface ChildProps {
  title: string;
}

export const ChildFC: React.FC<PropsWithChildren<ChildProps>> = ({
  title,
  children,
}) => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);

  const handleLogic = () => {
    setName("");
    setGuest([...guest, name]);
  };
  return (
    <div>
      Hi I am the {title}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogic}>{children}</button>
      <hr />
      <ul>
        {guest?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// export const Child = ({ title, children }: <PropsWithChildren<ChildProps>>) => {
//   return (
//     <>
//       {title}
//       {children}
//     </>
//   );
// };
