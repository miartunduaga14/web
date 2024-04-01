from django import forms

class UserForm(forms.Form):
    name = forms.CharField(label='Nombre', max_length=100)
    email = forms.EmailField(label='Correo Electrónico')


from django.shortcuts import render, redirect
from .forms import UserForm

def user_form(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            # Aquí puedes procesar los datos, por ejemplo, guardarlos en la base de datos
            return redirect('success_url')  # Redirecciona a alguna página de éxito
    else:
        form = UserForm()
    return render(request, 'your_app/user_form.html', {'form': form})

<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Enviar</button>
</form>
