export class EventTools<E extends string> {
  private openEvents = new Map<E, number[]>();
  private eventResults = new Map<E, number | null>();

  private registerEvent(event: E): void {
    const current = this.openEvents.get(event) ?? [];
    this.openEvents.set(event, [...current, Date.now()]);
  }

  private closeEvent(event: E): void {
    this.eventResults.set(event, this.getDuration(event));
    this.openEvents.set(event, []);
  }

  private getDuration(event: E): number | null {
    const events = this.openEvents.get(event) ?? [];

    const firstEvt = events.at(0);
    const lastEvt = events.at(-1);

    if (!firstEvt || !lastEvt) return null;

    return lastEvt - firstEvt;
  }

  public start(event: E): void {
    this.registerEvent(event);
  }

  public end(event: E): void {
    if (!this.openEvents.has(event)) return;

    this.registerEvent(event);
    this.closeEvent(event);
  }

  public getResult(event: E): number | null {
    return this.eventResults.get(event) ?? null;
  }

  public getResults(): Record<E, number | null> {
    return Object.fromEntries(this.eventResults.entries()) as Record<
      E,
      number | null
    >;
  }

  public clear(): void {
    this.openEvents.clear();
    this.eventResults.clear();
  }

  public isOpen(event: E): boolean {
    const events = this.openEvents.get(event) ?? [];

    return events.length > 0;
  }
}
