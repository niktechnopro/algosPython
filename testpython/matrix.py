a = [
    [1, 2],
    [2, 3],
]
b = [
    [4, 5],
    [6, 7],
]

def create_a_matrix(matrix1, matrix2):
    height = len(matrix1)
    width = len(matrix1[0])
    result = []
    for i in range(0, height):
       result.append([])
       for j in range(0, width):
           result[i].append(None)
    return result

def adding_matrix(matrix1, matrix2):
    matrix3 = create_a_matrix(matrix1, matrix2)
    print matrix3
    for i in range(0, len(matrix1)):
        for j in range(0, len(matrix2)):
            value = matrix1[i][j] + matrix2[i][j]
            matrix3[i][j] = value
            # print i ,j, value, matrix3
            
    return matrix3
            

print adding_matrix(a, b)