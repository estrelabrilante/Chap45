const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalValue: "" };
  },
  methods: {
    addGoal() {
      // push method
      this.goals.push(this.enteredGoalValue);
    },
    // splice method
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
