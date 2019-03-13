import React from 'react'
import styled from 'styled-components'
import { MdHighlightOff } from 'react-icons/md'

const TagList = styled.ul`
  display: flex;
  align-self: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 12px;
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 4px 6px;
  background: #d70064;
  border-radius: 6px;
  color: white;
  font-size: 0.9em;
  font-weight: lighter;
`
const TagGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 4px;
  align-items: center;
`

export default function InputTag({
  tagsInput,
  tagsArray,
  name,
  onTagsInputChange,
  placeholder,
  removeTag,
  inputKeyDown,
}) {
  return (
    <React.Fragment>
      <input
        name={name}
        value={tagsInput}
        placeholder={placeholder}
        type="text"
        onKeyDown={inputKeyDown}
        onChange={onTagsInputChange}
      />
      <TagList>
        {tagsArray.map((tag, i) => (
          <Tag key={tag}>
            <div
              onClick={() => {
                removeTag(i)
              }}
            >
              <TagGrid>
                {tag} <MdHighlightOff />
              </TagGrid>
            </div>
          </Tag>
        ))}
      </TagList>
    </React.Fragment>
  )
}
