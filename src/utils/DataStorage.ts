import { BASE_STORAGE_KEY } from '../constants';
import { v4 as uuid4 } from 'uuid';
import { WithUid } from '../types';

export default class DataStorage<T> {
  private store = new Map<string, WithUid<T>>();

  constructor(private key: string) {
    this.loadFromLocalStorage();
  }

  private get storageKey(): string {
    return `${BASE_STORAGE_KEY}_${this.key}`;
  }

  private loadFromLocalStorage(): void {
    try {
      const item = localStorage.getItem(this.storageKey);
      if (!item) return;

      this.store = new Map<string, WithUid<T>>(
        Object.entries(JSON.parse(item))
      );
    } catch {
      /* there's no need to worry */
    }
  }

  private saveToLocalStorage(): void {
    const data = JSON.stringify(Object.fromEntries(this.store.entries()));
    localStorage.setItem(this.storageKey, data);
  }

  push(data: T): string {
    const uid = uuid4().slice(24);

    this.store.set(uid, {
      uid,
      ...data,
    });

    this.saveToLocalStorage();

    return uid;
  }

  delete(uid: string): void {
    this.store.delete(uid);

    this.saveToLocalStorage();
  }

  getOne(uid: string): WithUid<T> | null {
    return this.store.get(uid) ?? null;
  }

  getAll(): WithUid<T>[] {
    return Array.from(this.store.values());
  }
}
