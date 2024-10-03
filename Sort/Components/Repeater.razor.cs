using Microsoft.AspNetCore.Components;

namespace Sort.Components
{
    public partial class Repeater
    {
        [Parameter]
        public string? DataSource { get; set; }

        [Parameter]
        public EventCallback<string?> DataSourceChanged { get; set; }

        void OnDataSourceChanged(string newValue)
        {
            DataSource = newValue;

            DataSourceChanged.InvokeAsync(newValue);
        }
    }
}
