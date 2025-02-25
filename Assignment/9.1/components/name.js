// Name Test Component
const NameTest = {
  template: `
    <h2>Name Test</h2>
    <div>
      <p>Please enter your name:</p>
      <input type="text" v-model="strName" />
      <p v-if="strName.toLowerCase() === 'vu'">Awesome name!</p>
      <p v-else-if="strName === ''">You haven't entered any name!</p>
      <p v-else>{{ strName }} is not my name!</p>
    </div>
  `,
  data() {
    return {
      strName: ""
    };
  }
};

export default NameTest;
