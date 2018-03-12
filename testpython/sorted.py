tored = {}
array = []

# def set_an_entry():
#   first = input('enter first name')
#   last = input('enter last name')
#   phone = input('phone number?')
#   stored['first'] = first
#   stored['last'] = last
#   stored['phone'] = phone
#   # print (stored)
#   array.append(stored)
#   print (array)
  
# set_an_entry()


contacts = [
  { 'first': 'Jonathan', 'last': 'Martin', 'height': 70 },
  { 'first': 'Nik', 'last': 'Bogu', 'height': 90 },
  { 'first': 'Moses', 'last': 'Lee', 'height': 50 }
]

# Extract a contact's first name
def getFirstName(c):
    return c['first']

# Build a tuple, which Python can sort by!
def getSortable(c):
    print(c)
    return (c['last'], c['first'], c['height'])

sortedContacts = sorted(contacts, reverse=False, key=getSortable)

print (sortedContacts)