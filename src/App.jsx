import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    article: '',
    agreement: false,
    gender: 'male',
    food: 'burger',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === 'checkbox' ? checked : value };
    });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    const { name, article, agreement, gender, food } = formData;
    alert(
      `Name: ${name}\nArticle: ${article}\nAgreement: ${agreement}\nGender: ${gender}\nFood: ${food}`
    );
    e.preventDefault();
  };

  return (
    <>
      <h3>Form_demo</h3>
      <div>
        <form action='' onSubmit={handleSubmit}>
          <div>name</div>
          <input type='text' name='name' id='name' onChange={handleChange} value={formData.name} />
          <br />
          <br />
          <div>article</div>
          <textarea
            name='article'
            id='article'
            cols='20'
            rows='5'
            value={formData.article}
            onChange={handleChange}
          ></textarea>
          <br />
          <br />
          <input
            type='checkbox'
            name='agreement'
            id='agreement'
            checked={formData.agreement}
            onChange={handleChange}
          />
          agree
          <br />
          <br />
          <input
            type='radio'
            name='gender'
            value='male'
            id='male'
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          male
          <input
            type='radio'
            name='gender'
            value='female'
            id='female'
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          female
          <br />
          <br />
          <select name='food' id='food' value={formData.food} onChange={handleChange}>
            <option value='burger'>burger</option>
            <option value='cookie'>cookie</option>
            <option value='noodle'>noodle</option>
          </select>
          <br />
          <br />
          <br />
          <button type='submit' id='submit'>
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
