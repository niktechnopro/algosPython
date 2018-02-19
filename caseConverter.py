# print ord('A')#ord shows return an integer representing the Unicode code point of the character when the argument is a unicode object

def caseConvert(str, conversionType):
  str = str.strip()
  conversionType = conversionType.strip()
  # check if any special characters are in the string
  str = str.lower()
  testArray = str.split()
  strArray = []
  for i in testArray:
    testString = ""
    for char in i:
      # if ord(char)>96 and ord(char)<123:
      if ord(char) in range(97, 123):
        # print "Valid", char
        testString += char

    strArray.append(testString) 

  # print(strArray)
  if conversionType == 'camelCase':
    print('this is camelCase: ')
    convertedStr = strArray[0].lower()
    for i in range(1, len(strArray)):
      convertedStr+=strArray[i].capitalize()
  elif conversionType == 'snake_case':
    print('this is snakecase: ')
    # for i in range(1, len(strArray)):
    convertedStr = '_'.join(strArray).lower()
    
  print convertedStr
  return convertedStr
  
  
# str = "This is just a test"

# user_inp = raw_input("make a selection '1' for camelCase, '2' for snakecase: ")
# # print (type(user_inp))# was checking the type of variable
# if user_inp == '1':
#   print (caseConvert(str, 'camelCase'))
# elif user_inp == '2':  
#   print (caseConvert(str, 'snake_case'))
# else:
#   print ('Oops, try again')
assert caseConvert(' I like    Java $%^&Script', 'snake_case')=="i_like_java_script", 'did not remove invalid characters'
assert caseConvert(' I like Java $%^& Script', 'camelCase')=="iLikeJavaScript", 'did not remove invalid characters'
assert caseConvert('I like Java Script', 'camelCase')=="iLikeJavaScript", 'broke on JS'
assert caseConvert(' I like Java    Script   ', '  camelCase   ')=="iLikeJavaScript", 'broke on spaces around the edges'
