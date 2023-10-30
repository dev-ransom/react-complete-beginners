import ContactCard from './ContactCard'
function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          imgUrl: 'http://placekitten.com/200/100',
          name: 'Mr pharoah',
          phone: '(212) 555-1234',
          email: 'mr.whiskaz@catnap.meow',
        }}
      />
      <ContactCard
        contact={{
          imgUrl: 'http://placekitten.com/400/200',
          name: 'Mr solomon',
          phone: '(212) 555-899',
          email: 'mr.solowiz@won.muee',
        }}
      />
      <ContactCard
        contact={{
          imgUrl: 'http://placekitten.com/200/100',
          name: 'Mr Moses',
          phone: '(212) 666-7487',
          email: 'mr.red@sea.meow',
        }}
      />
      <ContactCard
        contact={{
          imgUrl: 'http://placekitten.com/400/200',
          name: 'Mr Elijah',
          phone: '(212) 444-7383',
          email: 'mr.fihss@catnap.rat',
        }}
      />
    </div>
  )
}

export default App

// <ContactCard
//         imgUrl="http://placekitten.com/300/200"
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//       />
//       <ContactCard
//         imgUrl="http://placekitten.com/400/200"
//         name="Fluffykins"
//         phone="(212) 555-2345"
//         email="fluff@me.com"
//       />
//       <ContactCard
//         imgUrl="http://placekitten.com/400/300"
//         name="Destroyer"
//         phone="(212) 555-3456"
//         email="ofworlds@yahoo.com"
//       />
//       <ContactCard
//         imgUrl="http://placekitten.com/200/100"
//         name="Felix"
//         phone="(212) 555-4567"
//         email="thecat@hotmail.com"
//       />
