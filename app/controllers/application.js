import Ember from 'ember';
import {v4} from 'ember-uuid';

const Job = Ember.Object.extend({
  id:"",
  title:"",
  isDone:false,
  wage:0
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

  jobs:null,

  init() {
    this.set('jobs', [
      Job.create({ id:v4(),title:"Shoes Shop Web",isDone: false, wage:1000 }),
      Job.create({ id:v4(),title:"Baby Shop Web",isDone: false ,wage:800}),
      Job.create({ id:v4(),title:"Baby2 Shop Web",isDone: true ,wage:750}),
      Job.create({ id:v4(),title:"Baby3 Shop Web",isDone: false ,wage:1000}),
    ]);
  },

  allJobs: Ember.computed('jobs.[]', function() {
    let jobs = this.get('jobs');
    return jobs;
  }),

  incomplete: Ember.computed('jobs.@each.isDone', function() {
    let jobs = this.get('jobs');
    return jobs.filterBy('isDone', false);
  }),

  totalAmount: Ember.computed('jobs.[]',function(){
    return this.get('jobs').reduce((previousValue,item) => {
      return parseFloat(item.get('wage') + previousValue);
    },0)
  }),

  actions:{
    addNewJob(){
     const newJob = Job.create({
        id:v4(),
        title:this.get("newTitle"),
        isDone:false,
        wage:parseFloat(this.get('wage'))
      });
      this.get('jobs').pushObject(newJob);
      this.setProperties({
        newTitle:"",
        wage:""
      })
    }
  }
});
