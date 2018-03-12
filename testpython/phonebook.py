from time import sleep

phonebook_dict = {'Moe': '4043453456'}

def look_up():
    entry = input("Name: ")
    if entry in phonebook_dict:
        print("Found entry for {entry}:".format(phonebook_dict[entry]))
    else:
        print("Entry not found.")
    print (" ")
    sleep(1)

def set():
    entry = input("Name: ")
    entry_2 = input("Phone Number: ")
    phonebook_dict.update({entry : entry_2})
    print("Entry stored for {entry}.".format(entry))
    print (" ")
    sleep(1)

def delete():
    entry = input("Name: ")
    if entry in phonebook_dict:
        del phonebook_dict[entry]
        print("Deleted entry for {entry}.".format(entry))
    else:
        print("Entry not found.")
    print (" ")
    sleep(1)

def list_all():
    if len(phonebook_dict) == 0:
            print("No entries exist.")
    else:
        print('phonebook_dict', phonebook_dict)
        for i in phonebook_dict:
            print(i +":", phonebook_dict[i])
    print(" ")
    sleep(1)

def menu():
    print("""
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
    """)
    choice = raw_input("What do you want to do (1-5)? ")

    if choice == "1":
        look_up()
        menu()
    elif choice == "2":
        set()
        menu()
    elif choice == "3":
        delete()
        menu()
    elif choice == "4":
        list_all()
        menu()
    elif choice == "5":
        sleep(1)
        print("End")
        exit()
    else:
        print("{choice} is not a valid answer. ".format(choice))
        print(" ")
        sleep(1)
        menu()


menu()