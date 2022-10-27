import Ember from 'ember';

const todo = Ember.Object.extend({
  id:"",
  title:"",
  isDone:false
});

export default Ember.Controller.extend({
  firstName:"Thien",
  lastName:"Pham",
  fullName:Ember.computed('{firstName,lastName}',{
    get(){
      return `${this.get('firstName')} ${this.get('lastName')}`
    },
    set(key, value){
      const [firstName, lastName] = value.split(/\s+/);
      this.set('firstName',firstName);
      this.set('lastName',lastName);
      return value;
    }
  }),
  todos:null,
  init() {
    this.set('todos', [
      todo.create({ id:"1",title:"Learning EmberJS",isDone: false }),
      todo.create({ id:"2",title:"Learning ReactJS",isDone: false }),
      todo.create({ id:"3",title:"Learning VueJS",isDone: true }),
    ]);
  },
  allTodos: Ember.computed('todos.[]', function() {
    let todos = this.get('todos');
    return todos;
  }),
  incomplete: Ember.computed('todos.@each.isDone', function() {
    let todos = this.get('todos');
    return todos.filterBy('isDone', false);
  })
});
