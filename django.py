from myapp.models import MyModel

# Obtener todos los objetos donde `field_name` es igual a 'some value'
my_objects = MyModel.objects.filter(field_name='some value')
