import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = async () => {
    console.log("# Get All Users");
    await all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    await store(newUser)

    console.log("# Edit User: Isfa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    await update(1, editedUser)

    console.log("# Delete User: Nurul");
    await destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
    {
        name: "John Smith",
        age: 24,
        major: "Economics"
    },
    {
        name: "John Wick",
        age: 23,
        major: "System Analys"
    },
    {
        name: "Alexander",
        age: 25,
        major: "Accounting"
    },
    {
        name: "Shiroko",
        age: 22,
        major: "Philosophy"
    },
    {
        name: "Kuromi Serika",
        age: 22,
        major: "Political Science"
    }
]

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
    for (const user of users) {
        console.log(`name: ${user.name}`);
        console.log(`age: ${user.age}`);
        console.log(`major: ${user.major}`);
    }
}

// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
    users.push(user);
    console.log(users);
    
};

// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, user) => {
        if(index >= 0 && index < users.length) {
            users[index]["name"] = user["name"]
            users[index]["age"] = user["age"]
            users[index]["major"] = user["major"]
            console.log(users[index]);
        }

    
}

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
    if(index >= 0 && index < users.length){
        users.splice(index, 1) 
        console.log(users);
    }
}

export default Todo;
