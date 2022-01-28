import { makeAutoObservable, makeObservable } from 'mobx';
class Chart {
  one = [];
  two = [];
  third = [];
  minLength = 0;

  oneChartCords = [];
  twoChartCords = [];
  thirdChartCords = [];

  constructor() {
    makeAutoObservable(this);
  }

  onIputFunc(type) {
    switch (type) {
      case this.one:
        this.oneChartCords = [];
        this.oneChartCords = this.one.map((item) => ({ x: item.x, y: item.y }));
        this.oneChartCords = this.one.map((item) => ({ x: item.x, y: item.y }));
        break;
      case this.two:
        this.twoChartCords = [];
        this.twoChartCords = this.two.map((item) => ({ x: item.x, y: item.y }));
        this.twoChartCords = this.two.map((item) => ({ x: item.x, y: item.y }));
        break;
      case this.third:
        this.thirdChartCords = [];
        this.thirdChartCords = this.third.map((item) => ({ x: item.x, y: item.y }));
        this.thirdChartCords = this.third.map((item) => ({ x: item.x, y: item.y }));
        break;
      default:
        break;
    }
  }

  addTodo(todo) {
    console.log('x', this.oneChartCords);
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      x: null,
      y: null,
    };

    switch (todo) {
      case this.one:
        this.one = [...this.one, newItem];
        this.convertInputsAdd();
        console.log('one', this.one);
        break;
      case this.two:
        console.log('two');
        this.two = [...this.two, newItem];
        this.convertInputsAdd();
        break;
      case this.third:
        console.log('third');
        this.third = [...this.third, newItem];
        this.convertInputsAdd();
        break;
      default:
        break;
    }
  }
  removeTodo(id) {
    this.one = this.one.filter((todo) => todo.id !== id);
    this.two = this.two.filter((todo) => todo.id !== id);
    this.third = this.third.filter((todo) => todo.id !== id);
    this.convertInputsAdd();
  }

  convertInputsAdd() {
    this.third = [];
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      x: null,
      y: null,
    };
    this.minLength = Math.min(this.one.length, this.two.length);
    this.third = Array.from({ length: this.minLength }, () => newItem);
    // this.one.reduce((acc, sum) => acc + sum, 0);
  }

  convert() {
    this.convertInputsAdd();
    this.third.map((el, i) => {
      if (
        (this.one[i].x == null || this.one[i].x == ' ') &&
        (this.one[i].y == null || this.one[i].y == ' ') &&
        (this.two[i].x == null || this.two[i].x == ' ') &&
        (this.two[i].y == null || this.two[i].y == ' ')
      ) {
        this.one[i].x = 0;
        this.one[i].y = 0;
        this.two[i].x = 0;
        this.two[i].y = 0;
      }
      el.x = (parseInt(this.one[i].x) + parseInt(this.two[i].x)) / 2;
      el.y = (parseInt(this.one[i].y) + parseInt(this.two[i].y)) / 2;
    });
  }
}

export default new Chart();
