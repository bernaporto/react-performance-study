import { BASE_STORAGE_KEY } from '../constants';
import { v4 as uuid4 } from 'uuid';

type WithUid<T> = T & {
  uid: string;
};

export default class DataStorage<T> {
  private store = new Map<string, WithUid<T>>();

  constructor(private key: string) {
    this.loadFromLocalStorage();
  }

  private get storageKey() {
    return `${BASE_STORAGE_KEY}_${this.key}`;
  }

  private loadFromLocalStorage() {
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

  private saveToLocalStorage() {
    const data = JSON.stringify(Object.fromEntries(this.store.entries()));
    localStorage.setItem(this.storageKey, data);
  }

  push(data: T) {
    const uid = uuid4().slice(24);

    this.store.set(uid, {
      uid,
      ...data,
    });

    this.saveToLocalStorage();

    return uid;
  }

  delete(uid: string) {
    this.store.delete(uid);

    this.saveToLocalStorage();
  }

  getOne(uid: string) {
    return this.store.get(uid) ?? null;
  }

  getAll() {
    return Object.values(this.store);
  }
}
