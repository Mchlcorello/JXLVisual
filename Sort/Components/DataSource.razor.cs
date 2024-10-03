using Microsoft.AspNetCore.Components;

namespace Sort.Components
{
    public partial class DataSource
    {

        [Parameter]
        public string Name { get; set; }

        [Parameter]
        public EventCallback<string> NameChanged { get; set; }


        void OnNameChanged(string newValue)
        {
            Name = newValue;

            NameChanged.InvokeAsync(newValue);
        }
    }
}
