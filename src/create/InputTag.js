import React from 'react'

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
    <div>
      <ul>
        {tagsArray.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(i)
              }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <input
        name={name}
        value={tagsInput}
        placeholder={placeholder}
        type="text"
        onKeyDown={inputKeyDown}
        onChange={onTagsInputChange}
      />
    </div>
  )
}
