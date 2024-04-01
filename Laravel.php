$users = User::where('active', 1)
               ->orderBy('name')
               ->take(10)
               ->get();
