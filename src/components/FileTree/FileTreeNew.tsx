import React, { useEffect, useState } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import "./styles.css";
import { IFileTreeProps, mockData } from "./types";

const folder = {
  name: "",
  children: [
    {
      name: "src",
      children: [{ name: "index.js" }, { name: "styles.css" }],
    },
    {
      name: "node_modules",
      children: [
        {
          name: "react-accessible-treeview",
          children: [{ name: "index.js" }],
        },
        { name: "react", children: [{ name: "index.js" }] },
      ],
    },
    {
      name: ".npmignore",
    },
    {
      name: "package.json",
    },
    {
      name: "webpack.config.js",
    },
  ],
};


export const FileTreeView = ({
	onFileSelection,
	files,
}: IFileTreeProps) => {
	const [data, setData] = useState(flattenTree(files))

	useEffect(() => {
		setData(flattenTree(files))
	}, [files])

  return (
    <div>
      <div className="directory">
        <TreeView
          data={data}
          aria-label="directory tree"
					onNodeSelect={e => !e.isBranch && onFileSelection(e.element.name)}
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            getNodeProps,
            level,
          }) => (
						<div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
              {isBranch ? (
                	<span> dir </span>

              ) : (
                	<span> fil </span>

              )}
							{element.name}
						</div>
						)}
        />
      </div>
    </div>
  );
}

