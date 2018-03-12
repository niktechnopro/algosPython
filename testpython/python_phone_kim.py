stored = {'moe': '12345678', 'kim': '987654332'}
print stored
array = []
array.append(stored)
print array
def question1(): 
    print """
    Electronic Phone Book
    ======================
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entries
    5. Quit
    """

def lookup():
    print array
    name = raw_input('First Name: ')
    print 'Phone Number: ' + array['firstname']['phone_number']
def set_an_entry():
    stored = {}
    first = raw_input ('First Name: ')
    last = raw_input('Last Name: ')
    phone_number = raw_input('Phone Number: ')
    stored['First Name'] = first
    stored['Last Name'] = last
    stored['phone_number'] = phone_number
    array.append(stored)
    print "Entry stored for %s %s" % (first, last)
def delete():
    del_name = raw_input ('Frist Name: ')
    array.pop(del_name)
    print 'Deleted entry for %s' %del_name
def getFristName(c):
    return c['first']
def getLastName(c):
    return c['last']
def getPhoneNumber(c):
    return c['Phone_Number']    
def found():
    print array
    # for a,b in stored.items()
    # for a,b in stored.items():
    #     print 'Found entry for %s: %s ' % (a,b)
   
while True:
    question1()
    question = int(raw_input('What do you want to do (1-5)? '))
    if question == 1:
        lookup()
    elif question == 2:
        set_an_entry()
    elif question == 3:
        delete()
    elif question == 4:
        found()
    elif question == 5:
        print "Bye."
        break
    else:
        print "Please try again."
# print """
# Electronic Phone Book
# ======================
# 1. Look up an entry
# 2. Set an entry
# 3. Delete an entry
# 4. List all entries
# 5. Quit
# """
# from collections import OrderedDict
# stored ={}
# def lookup():
#     name = raw_input('Name: ')
#     print 'Phone Number: ' + stored[name] 
# def set_an_entry():
#     name = raw_input ('Name: ')
#     phone_number = raw_input('Phone Number: ')
#     stored[name] = phone_number
#     print "Entry stored for %s" %name 
# def delete():
#     name = raw_input ('Name: ')
#     del stored[name]
#     print 'Deleted entry for %s' %name
# def found():
#     for a,b in stored.items():
#         print 'Found entry for %s: %s ' % (a,b)
   
    
 
# while True:
#     question = int(raw_input('What do you want to do (1-5)? '))
#     if question == 1:
#         lookup() 
#     elif question == 2:
#         set_an_entry() 
#     elif question == 3:
#         delete()
#     elif question == 4:
#         found()
#     elif question == 5:
#         print "Bye."
#         break
#     else:
#         print "Please try again."