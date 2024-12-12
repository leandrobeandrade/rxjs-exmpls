import { Component, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js'
import { environment } from 'src/env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;
  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  ngOnInit(): void {
    console.log(this.supabase);
    this.getMainNew();
  }

  async getMainNew() {
    const title$ = await this.supabase.from('news').select('title');
    console.log('### ', title$?.data);
  }
}
