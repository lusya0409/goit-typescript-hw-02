/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Titable {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Titable> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
