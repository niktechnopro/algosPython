a = [
    [1, 2],
    [2, 3],
]
b = [
    [4, 5],
    [6, 7],
]

def create_a_matrix(matrix1, matrix2):
	matrix3 = []
	row = len(matrix1)
	column = len(matrix2)
	for i in range(row):
		matrix3.append((column * [None]))
	return matrix3

matrix3 = create_a_matrix(a, b)

matrix3[1][1] = 5

print type(matrix3)
print matrix3