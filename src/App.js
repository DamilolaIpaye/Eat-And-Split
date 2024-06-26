import './App.css';
import './index.css';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clack",
    image: "http://i.pravatar.cc/48>?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "http://i.pravatar.cc/48>?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "http://i.pravatar.cc/48>?u=499476",
    balance: 0,
  },
]

function Button({ children, onClick}){
  return<Button className="button" onClick={onClick}>{children}</Button>;
}

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState
  (false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends,friend]);
    setShowAddFriend(false);
  }

  function handleSelection (friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ?
      null : friend));
  }

  return (
    <div className='app'>
      <div className='sidebar'>
      <FriendsList friends={friends} onSelection={handleSelection}/>
      {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
      <button onClick={handleShowAddFriend}>
        {showAddFriend ? "Close" : "Add friend"}
      </button>
      
      </div>
      
     {selectedFriend && <FormSplitBill selectedFriend=
     {selectedFriend}/>} 
    </div>
  );
}



const FriendsList = ({friends, onSelection} 
) => {
  return (
    <ul>
  {friends.map((friend) => ( 
    <Friend friend={friend} key={friend.id}
    onSelection={onSelection} />
  ))}
    </ul>
  );
}
  const Friend = ({friend}

  ) => {
    
    return (
      <li>
        <img src={friend.image} alt={friend.name}/>
        <h3>{friend.name}</h3>
  
        {friend.balance < 0 && (
          <p className='red'>
          You owe { friend.name} {Math.abs(friend.balance)}
          </p>
        )}
         {friend.balance > 0 && (
          <p className='green'>
          { friend.name} owes you {Math.abs(friend.balance)}
          </p>
        )}
         {friend.balance === 0 && 
          <p>
          You and { friend.name} are even
          </p>
        }
        <button onClick={() => onSelection(friend)}>Select</button>
      </li>
    )
  }

  
const FormAddFriend = ({onAddFriend}) => {
  const [name,setName] = useState("");
  const [ image, setImage] = useState["http://i.pravata.cc/48"];

function handleSubmit(e) {
  e.preventDefault();

  const id = crypto.randomUUID();
  const newFriend ={ 
    id,
    name,
    image: '{image}?={id}',
    balance: 0,
  };

  console.log(newFriend);


  setName("");
  setImage("https://i.pravatar.cc/48");
}
  
  return (
    <form className="form-add-friend" onSubmit={handleSubmit} >
        <label>Friend name</label>
        <input type='text' value={image}
        onChange={(e) => setImage(e.target.value)}/>

        <label>Image URL</label>
        <input type='text'/>

        <button>Add</button>
    </form>
  );
}
const FormSplitBill = (

) => {
  
  return (
    <form >
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>Bill value</label>
        <input type='text'/>

        <label>Your expenses</label>
        <input type='text'/>

        <label>X's expenses</label>
        <input type='text'disabled/> 

        <label>Who is paying the bill?</label>
        <select>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <button>Split bill</button>
    </form>
  );
}


export default App;