import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
  const themeName = 'GracefulPotato.gruvbox-ish';
  const theme = vscode.extensions.getExtension(themeName);

  if (!theme && vscode.workspace.getConfiguration('ruby-better-highlighting').get('recommendTheme', true)) {
    const message = 'To check out some features of Ruby Better Highlighting, please install the Gruvbox ish theme. Do you want to install it now?';
    const choice = await vscode.window.showInformationMessage(message, 'Install', 'Not now', 'Do not show again');

    if (choice === 'Install') {
      await vscode.commands.executeCommand('extension.open', themeName);
      await vscode.commands.executeCommand('workbench.extensions.installExtension', themeName);
    } else if (choice === 'Do not show again') {
      vscode.workspace.getConfiguration('ruby-better-highlighting').update('recommendTheme', false, true);
    }
  }
}
