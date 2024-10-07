using Microsoft.AspNetCore.Components;

namespace Sortable.Components
{
    public partial class Pair
    {

        [Parameter]
        public string Key { get; set; }

        [Parameter]
        public EventCallback<string> KeyChanged { get; set; }

        [Parameter]
        public string? Value { get; set; }

        [Parameter]
        public EventCallback<string?> ValueChanged { get; set; }

        private async Task HandleKeyChanged(string newValue)
        {
            Key = newValue;

            await KeyChanged.InvokeAsync(newValue);
        }
        private async Task HandleValueChanged(string? newValue)
        {
            Value = newValue;

            await ValueChanged.InvokeAsync(newValue);
        }
    }
}
