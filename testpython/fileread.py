# histogram = {}
# someText = raw_input("Enter some text: ")
fo = open('test.txt', "a+")
# fo.writelines(someText + '\n')
# reading the file:
# print fo
reading = fo.read()
print "%s" % (reading)
# print fo.read()


# def letter_histogram():
#     with open(filename) as file_object: 
#         lines = file_object.read()
#         for letter in range(0, len(lines)):
#             if lines[letter] in histogram: 
#                 histogram[lines[letter]] += 1
#             else: 
#                 histogram[lines[letter]] = 1

#         print(histogram)

# letter_histogram()