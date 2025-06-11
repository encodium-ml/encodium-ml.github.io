import { Course, NavItem, Teacher } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'Student Classes', path: '/student-classes' },
  { title: 'Adult Classes', path: '/adult-classes' },
  { title: 'Faculty', path: '/faculty' },
];

export const STUDENT_COURSE: Course = {
  title: 'Machine Learning for Students',
  description: 'An introductory course designed specifically for students in grades 8-10 to explore the foundations of machine learning through hands-on projects.',
  prerequisites: ['Algebra 1'],
  topics: [
    'Introduction to Python programming',
    'Data analysis and visualization',
    'Basic machine learning concepts',
    'Supervised learning algorithms',
    'Building simple predictive models',
    'Practical applications and projects',
  ],
  duration: '1 hour per class',
  price: '$20 per class',
  formLink: 'https://forms.gle/QXJUWjgpCNmJbEEVA',
};

export const ADULT_COURSE: Course = {
  title: 'Advanced Machine Learning for IT Professionals',
  description: 'A comprehensive program for IT professionals looking to expand their skillset with machine learning techniques and applications.',
  topics: [
    'Deep learning fundamentals',
    'Neural networks architecture',
    'Natural language processing',
    'Computer vision applications',
    'Model deployment and monitoring',
    'ML project management',
    'MLOps and best practices',
    'Real-world case studies',
  ],
  duration: '90 minutes per class, 8 classes total',
  price: '$300 total',
  formLink: 'https://forms.gle/exampleAdultForm',
};

export const TEACHERS: Teacher[] = [
  {
    name: 'Aneesh Kalla',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    qualifications: [
      'M.S. in Computer Science with focus on Machine Learning',
      '5+ years experience in data science and ML engineering',
      'Certified TensorFlow Developer',
      'Published research in neural network optimization',
      'Former instructor at leading technology bootcamp',
      'Industry experience with major tech companies',
    ],
  },
];

export const CODE_EXAMPLES = [
  {
    title: 'Simple Linear Regression',
    code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Generate sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
X_new = np.array([[0], [6]])
y_pred = model.predict(X_new)

# Plot the results
plt.scatter(X, y, color='blue')
plt.plot(np.append(X_new, X), 
         np.append(y_pred, model.predict(X)), 
         color='red', linewidth=2)
plt.xlabel('Input feature')
plt.ylabel('Target value')
plt.title('Linear Regression Example')
plt.show()
`,
  },
  {
    title: 'Neural Network in TensorFlow',
    code: `import tensorflow as tf
from tensorflow import keras
import numpy as np

# Create a simple dataset
X = np.random.rand(1000, 20)
y = np.random.randint(2, size=(1000, 1))

# Define the model architecture
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(20,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(X, y, epochs=20, batch_size=32,
                   validation_split=0.2)

# Evaluate the model
test_loss, test_acc = model.evaluate(X, y)
print(f'Test accuracy: {test_acc}')
`,
  },
];

export const CONTENT_IMAGES = [
  {
    title: 'Data Visualization',
    src: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Neural Networks',
    src: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Collaborative Learning',
    src: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
