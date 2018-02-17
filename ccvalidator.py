#possible numbers in credit card
valid_numbers = ['0','1','2','3','4','5','6','7','8','9']
#let's read card number from user
user_inp = raw_input('enter credit card number : ');

def test_inp(user_inp):#this function works with card numbers
  numbers = "";
  # check for integers only and get rid of empty spaces
  for number in user_inp:
    if number in valid_numbers:
      numbers += number
  '''
  we are going to slice first 2 numbers from string - numbers[0:2]
  we are using 2 ways to slice string - 'slicing and startwith' 
  print('our card in array', numbers)
  '''
  if len(numbers)>14 and len(numbers) == 15:
    if numbers.startswith('37') or numbers.startswith('34'):
      return 'This is VALID card: American Express'
  elif len(numbers)>14 and len(numbers) == 16:
    if numbers.startswith('6001'):
      return 'This is VALID card: Discovery card'
    elif numbers.startswith('4'):
      return 'this card VISA'
    elif int(numbers[0:2])>49 and int(numbers[0:2])<56:
      return 'this is VALID card: Mastercard'
    else:
      print "Invalid card number"
      return False
  else:
    print "Invalid card number"
    return False
    
#assert test_inp(user_inp), 'Invalid card number'
# if condition is True - assert does nothing,
# if condition is False - assert halts the program and invokes Assert Error

print(test_inp(user_inp))