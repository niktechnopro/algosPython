import matplotlib.pyplot as plt
import numpy as np

def f(t):
    return np.exp(-t) * np.cos(2*np.pi*t)
print "let's draw something" 
t = np.arange(0., 5., 0.2)
# plt.plot([1,3,4,5],[2,6,12,18], linewidth=4.0)
plt.plot(t, f(t),[2,6,12,18], 'ro' linewidth=4.0)
# axis specifies [xmin, xmax, ymin, ymax]
plt.ylabel('some numbers')
plt.axis([0, 6, 0, 20])
plt.show()

# t = np.arange(0., 5., 0.2) #nimpy creates a range of numbers - seems like just a helper
print t