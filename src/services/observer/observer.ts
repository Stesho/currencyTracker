type Subscriber = () => void;

interface IObserver {
  subscribe: (subscriber: Subscriber) => IObserver;
  unsubscribe: (subscriber: Subscriber) => IObserver;
  notify: () => IObserver;
}

class Observer implements Observer {
  subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
    return this;
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers.filter((sub) => sub !== subscriber);
    return this;
  }

  notify() {
    this.subscribers.forEach((subscriber) => subscriber());
    return this;
  }
}

export default new Observer();
