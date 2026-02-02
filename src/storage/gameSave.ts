import { encode, decode } from "@/utils/codec/integrityCodec";

const STORAGE_KEY = 'bluffshot_save'

async function saveGame<T>(state: T) {
  const encoded = await encode(state)
  localStorage.setItem(STORAGE_KEY, encoded)
}

async function loadGame<T>() {
  const encoded = localStorage.getItem(STORAGE_KEY)
  if (!encoded) return null
  return decode<T>(encoded)
}

function clearGame() {
  localStorage.removeItem(STORAGE_KEY)
}

export {
  saveGame,
  loadGame,
  clearGame
}