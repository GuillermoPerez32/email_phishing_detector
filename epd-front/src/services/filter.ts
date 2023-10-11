import { create } from 'zustand'

interface AppState {
  filter: string
  changeFilter: (newFilter: string) => void
}

export const useAppStore = create<AppState>()((set) => ({
  filter: '',
  changeFilter: (newFilter) => set((_) => ({ filter:  newFilter })),
}))