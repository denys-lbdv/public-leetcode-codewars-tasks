type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

export class EventEmitter {
  map = new Map();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.map.has(eventName)) {
      this.map.set(eventName, [callback]);
    } else {
      let updatedValue: Callback[] = this.map.get(eventName);
      updatedValue.push(callback);
      this.map.set(eventName, updatedValue);
    }
    return {
      unsubscribe: () => {
        let updatedEvent: [] = this.map.get(eventName);
        if (updatedEvent.length === 0) {
          this.map.delete(eventName);
        } else {
          let set = new Set<Callback>(updatedEvent);
          set.delete(callback);

          this.map.set(eventName, Array.from(set));
        }

        return undefined;
      },
    };
  }
  emit(eventName: string, args: any[] = []): any[] {
    if (!this.map.has(eventName)) return [];

    let result = new Array();
    const funsForExecution = this.map.get(eventName);
    for (let i = 0; i < funsForExecution.length; i++) {
      result.push(funsForExecution[i](...args));
    }
    return result;
  }

  /*
  For internal usage during develop
   */
  displayMap() {
    this.map.forEach((v, k) => {
      console.log(`${k}:${v}`);
    });
  }
}
