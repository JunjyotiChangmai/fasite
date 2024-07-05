import React from 'react'

// FamilyTree component to recursively display the tree
const FamilyTree = ({ member }) => {
    return (
      <ul>
        <li>
          <div className="member">
            <div className="member-box">{member.userName}</div>
            {member.children && member.children.length > 0 && (
              <ul className="children">
                {member.children.map(child => (
                  <FamilyTree key={child._id} member={child} />
                ))}
              </ul>
            )}
          </div>
        </li>
      </ul>
    );
  };

export default FamilyTree
