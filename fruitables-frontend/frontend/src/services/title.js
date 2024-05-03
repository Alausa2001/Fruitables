// useDocumentTitle.js
import { useRef, useEffect } from 'react'

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function useCurrentTitle() {
  return useRef(document.title).current;
}

export { useDocumentTitle, useCurrentTitle };