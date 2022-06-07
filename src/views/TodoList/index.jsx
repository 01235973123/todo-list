import './styles.scss'
import InputFieldDate from '../../components/InputFieldDate';
import InputFieldText from '../../components/InputFieldText';
import InputFieldDescription from '../../components/InputFieldDescription';
import FieldSelect from '../../components/FieldSelect';
import ButtonSubmit from '../../components/ButtonSubmit';

const todoList = () => {
  const options = [{ value: 'low', name: 'low' }, { value: 'normal', name: 'normal' }, { value: 'high', name: 'high' }]

  return <div className='todo-list'>
    <div className='new-task'>
      <h3>New Task</h3>
      <InputFieldText label='Add new task' />
      <InputFieldDescription label='Description' />
      <div className='row'>
        <InputFieldDate label='Due Date' />
        <FieldSelect label='Piority' options={options} />
      </div>
      <ButtonSubmit text={'Add'} />
    </div>
    <div className='list'>
      <div className='todo-list-detail'>
        <h3>To Do List</h3>
        <InputFieldText label='Search' />
        <div className='items'>
          <div className='item'>
            <div className='parent'>
              <div className='right'>
                <input type='checkbox' />
                <p>Do home</p>
              </div>
              <div className='left'>
                <button>
                  Detail
                </button>
                <button>Remove</button>
              </div>
            </div>
            <div className='child'>
              <InputFieldText label='Add new task' />
              <InputFieldDescription label='Description' />
              <div className='row'>
                <InputFieldDate label='Due Date' />
                <FieldSelect label='Piority' options={options} />
              </div>
              <ButtonSubmit text={'Update'} />
            </div>
          </div>
          <div className='item'>
            <div className='parent'>
              <div className='right'>
                <input type='checkbox' />
                <p>Do home</p>
              </div>
              <div className='left'>
                <button>
                  Detail
                </button>
                <button>Remove</button>
              </div>
            </div>
            <div className='child'>
              <InputFieldText label='Add new task' />
              <InputFieldDescription label='Description' />
              <div className='row'>
                <InputFieldDate label='Due Date' />
                <FieldSelect label='Piority' options={options} />
              </div>
              <ButtonSubmit text={'Update'} />
            </div>
          </div>
        </div>
      </div>
      <div className='bulk-action'>
        <div className='item'>
          <div className='right'>
            <p>Bulk Action:</p>
          </div>
          <div className='left'>
            <button>
              Detail
            </button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default todoList;
