import datetime
STARTING_DATE = datetime.datetime.now()

# ------------------------------------
# configuration

APP_DATA = {
  'sorting': 0,
  'restaurants': {
    'Chipotle': [],
    'Farm Burger': [],
    'Nan Stop': []
  }
}


DAYS_PER_ROUND = 7
MAX_VISITS_PER_ROUND = 3


# ------------------------------------
# utilities

def clear_screen():
  for i in range(50):
    print

def total_visits():
  total = 0
  for visits in APP_DATA['restaurants'].values():
    total = total + len(visits)
  return total

# ------------------------------------
# sorting and printing the restaurants


def _sorter(item1, item2):
  visit_count1 = len(item1[1])
  visit_count2 = len(item2[1])

  return visit_count2 - visit_count1


def sorted_restaurants():
  items = APP_DATA['restaurants'].items()

  if APP_DATA['sorting'] == 1:
    # ascending
    items = sorted(items, cmp=_sorter)

  elif APP_DATA['sorting'] == -1:
    # descending
    items = sorted(items, cmp=_sorter)
    items.reverse()

  return items


def sorted_restaurant_names():
  names = []
  for k, v in sorted_restaurants():
    names.append(k)
  return names

def show_visits():
  for k, v in sorted_restaurants():
    print '%s: %d' % (k, len(v))


def print_restaurants():
  i = 0
  for k, v in sorted_restaurants():
    i = i + 1
    print '%d. %s' % (i, k)


# ------------------------------------
# managing restaurants

def remove_restaurant(name):
  del APP_DATA['restaurants'][name]

def add_restaurant(name):
  APP_DATA['restaurants'][name] = []



# ------------------------------------
# date stuff

def days_since_start():
  return total_visits()

def current_date():
  return STARTING_DATE + datetime.timedelta(days=days_since_start())


def first_day_of_this_round():
  threshold = days_since_start() - DAYS_PER_ROUND
  first_day = STARTING_DATE + datetime.timedelta(days=threshold)
  print first_day
  return first_day


# ------------------------------------
# logging restaurant visits

def get_restaurant_choice():

  name_of_today = current_date().strftime("%A")

  print ''
  print '-----------------------------------------'
  print 'Choose a restaurant for %s (or press 0 to stop):' % name_of_today
  print_restaurants()
  return int(raw_input())

def has_rounds_left():
  print 'This makes no sense'
  if (total_visits() % DAYS_PER_ROUND) >= MAX_VISITS_PER_ROUND:
    return False
  else:
    return True

def has_exceeded_max_for_restaurant(name):
  if len(APP_DATA['restaurants'][name]) % DAYS_PER_ROUND >= MAX_VISITS_PER_ROUND:
    threshold = 1 - MAX_VISITS_PER_ROUND
    # print threshold
    # print first_day_of_this_round()
    # print APP_DATA['restaurants'][name][threshold] > first_day_of_this_round()
    if APP_DATA['restaurants'][name][threshold] > first_day_of_this_round():
      return True
  return False

def add_visit(name):
  if has_exceeded_max_for_restaurant(name):
    print 'No soup for you! You have gone to %s too many times' % (name)
    return
  elif name in APP_DATA['restaurants']:
    APP_DATA['restaurants'][name].append(current_date())
  else:
    # APP_DATA['restaurants'][name].append()
    print 'um... that can\'t be right...'


# ------------------------------------
# app menus

def show_visit_menu():
  # while has_rounds_left():
  while True:
    choice = get_restaurant_choice()

    # Adjust from the human-readable version
    choice = choice - 1

    if choice == -1:
      # They chose 0, let's bail.
      break

    elif choice < len(APP_DATA['restaurants']):
      r_name = sorted_restaurant_names()[choice]
      # Tell them what they chose
      print '\n\n'
      print 'You chose %s' % (r_name)
      print '\n\n'

      # Add the visit for that restaurant, by its name
      add_visit(r_name)

    # Show them a summary
    show_visits()

def show_manage_menu():
  while True:
    print '\n\n\nThe current restaurant list is:'
    print_restaurants()
    print '\n\n'
    print '0. Go to main menu'
    print '1. Add a restaurant'
    print '2. Remove a restaurant'
    choice = int(raw_input())

    if choice == 0:
      break
    elif choice == 1:
      name = raw_input('Enter the name of a restaurant to add: ')
      add_restaurant(name)
    elif choice == 2:
      print_restaurants()
      choice = int(raw_input('Which restaurant would you like to remove? '))
      # Adjust from the human-readable version
      choice = choice - 1
      r_name = APP_DATA['restaurants'].keys()[choice]
      remove_restaurant(r_name)


def show_sort_menu():
    print '\n\n\nThe current restaurant list is:'
    print_restaurants()
    print '\n\n'
    print '0. Go to main menu'
    print '1. Sort by most frequently visited'
    print '2. Sort by least frequently visited'
    choice = int(raw_input())

    if choice == 1:
      APP_DATA['sorting'] = 1
    elif choice == 2:
      APP_DATA['sorting'] = -1




def print_main_menu():
    print '0. Quit'
    print '1. Log a restaurant visit'
    print '2. Manage restaurant list'
    print '3. Sort restaurant list'


# ------------------------------------
# main program loop
print 'launching main program loop'
def main():
  while True:
    clear_screen()
    print_main_menu()
    choice = int(raw_input())

    if choice == 0:
      break
    elif choice == 1:
      # if not has_rounds_left():
      #   print '\n\n\n'
      #   print 'You are out of visits!'
      #   raw_input('Press enter to continue')
      # else:
      #   show_visit_menu()
      show_visit_menu()

    elif choice == 2:
      show_manage_menu()

    elif choice == 3:
      show_sort_menu()
      show_visits()
      raw_input('Press enter to continue')

  print 'Thank you come again'

main()