const INITIAL_STATE = [
  {
    title: "Event1",
    img: "http://i.imgur.com/UTmTK9i.png",
    description: "this is event",
    date: "20/20/20",
    time: "20.00",
    category: "Test",
    createBy: 'Jack'
  },
  {
    title: "Event2",
    img: "http://i.imgur.com/UTmTK9i.png",
    description: "this is event",
    date: "20/20/20",
    time: "20.00",
    category: "Test",
    createBy: 'Jack'
  },
  {
    title: "Event3",
    img: "http://i.imgur.com/UTmTK9i.png",
    description: "this is event",
    date: "20/20/20",
    time: "20.00",
    category: "Test",
    createBy: 'Jack'
  },
  {
    title: "Event4",
    img: "http://i.imgur.com/UTmTK9i.png",
    description: "this is event",
    date: "20/20/20",
    time: "20.00",
    category: "Test",
    createBy: 'Jack'
  },
  {
    title: "Event5",
    img: "http://i.imgur.com/UTmTK9i.png",
    description: "this is event",
    date: "20/20/20",
    time: "20.00",
    category: "Test",
    createBy: 'Jack'
  }
];

export const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEW_EVENT':
      newState = [...state, action.payload]
      return newState
    default:
      return state
  }
};